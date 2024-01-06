# Eurocrypt[2022-1]
## EpiGRAM: Practical Garbled RAM.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram)
### Authors
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> Garbled RAM (GRAM) is a powerful technique introduced by Lu and Ostrovsky that equips Garbled Circuit (GC) with a sublinear cost RAM without adding rounds of interaction. While multiple GRAM constructions are known, none are suitable for practice, due to costs that have high constants and poor scaling.
> 
> We present the first GRAM suitable for practice. For computational security parameter \(\kappa \) and for a size-n RAM that stores blocks of size \(w = \varOmega (\log ^2n)\) bits, our GRAM incurs amortized \(O(w \cdot \log ^2 n \cdot \kappa )\) communication and computation per access. We evaluate the concrete cost of our GRAM; our approach outperforms trivial linear-scan-based RAM for as few as 512 128-bit elements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_1](https://doi.org/10.1007/978-3-031-06944-4_1)
## Garbled Circuits with Sublinear Evaluator.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator)
### Authors
* Abida Haque, NC State, Raleigh, USA
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Akash Shah, UCLA, Los Angeles, USA
### Abstract
> A recent line of work, Stacked Garbled Circuit (SGC), showed that Garbled Circuit (GC) can be improved for functions that include conditional behavior. SGC relieves the communication bottleneck of 2PC by only sending enough garbled material for a single branch out of the b total branches. Hence, communication is sublinear in the circuit size. However, both the evaluator and the generator pay in computation and perform at least factor \(\log b\) extra work as compared to standard GC.
> 
> We extend the sublinearity of SGC to also include the work performed by the GC evaluator \(E\); thus we achieve a fully sublinear \(E\), which is essential when optimizing for the online phase. We formalize our approach as a garbling scheme called \(\mathsf {GCWise}\): GC WIth Sublinear Evaluator.
> 
> We show one attractive and immediate application, Garbled PIR, a primitive that marries GC with Private Information Retrieval. Garbled PIR allows the GC to non-interactively and sublinearly access a privately indexed element from a publicly known database, and then use this element in continued GC evaluation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_2](https://doi.org/10.1007/978-3-031-06944-4_2)
## Round-Optimal and Communication-Efficient Multiparty Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, CA, USA
* Vassilis Zikas, Purdue University, West Lafayette, IN, USA
### Abstract
> Typical approaches for minimizing the round complexity of multiparty computation (MPC) come at the cost of increased communication complexity (CC) or the reliance on setup assumptions. A notable exception is the recent work of Ananth et al. [TCC 2019], which used Functional Encryption (FE) combiners to obtain a round optimal (two-round) semi-honest MPC in the plain model with a CC proportional to the depth and input-output length of the circuit being computed—we refer to such protocols as circuit scalable. This leaves open the question of obtaining communication efficient protocols that are secure against malicious adversaries in the plain model, which we present in this work. Concretely, our two main contributions are:
> 
> 1) We provide a round-preserving black-box compiler that compiles a wide class of MPC protocols into circuit-scalable maliciously secure MPC protocols in the plain model, assuming (succinct) FE combiners.
> 
> 2) We provide a round-preserving black-box compiler that compiles a wide class of MPC protocols into circuit-independent—i.e., with a CC that depends only on the input-output length of the circuit—maliciously secure MPC protocols in the plain model, assuming Multi-Key Fully-Homomorphic Encryption (MFHE). Our constructions are based on a new compiler that turns a wide class of MPC protocols into k-delayed-input function MPC protocols (a notion we introduce), where the function that is being computed is specified only in the k-th round of the protocol.
> 
> As immediate corollaries of our two compilers, we derive (1) the first round-optimal and circuit-scalable maliciously secure MPC, and (2) the first round-optimal and circuit-independent maliciously secure MPC in the plain model. The latter MPC achieves the best to-date CC for a round-optimal malicious MPC protocol. In fact, it is even communication-optimal when the output size of the function being evaluated is smaller than its input size (e.g., for boolean functions). All of our results are based on standard polynomial time assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_3](https://doi.org/10.1007/978-3-031-06944-4_3)
## Round-Optimal Byzantine Agreement.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement)
### Authors
* Diana Ghinea, ETH Zurich, Zürich, Switzerland
* Vipul Goyal, Carnegie Mellon University and NTT Research, Pittsburgh, USA
* Chen-Da Liu-Zhang, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Byzantine agreement is a fundamental primitive in cryptography and distributed computing, and minimizing its round complexity is of paramount importance. It is long known that any randomized r-round protocol must fail with probability at least \((c\cdot r)^{-r}\), for some constant c, when the number of corruptions is linear in the number of parties, \(t = \theta (n)\). On the other hand, current protocols fail with probability at least \(2^{-r}\). Whether we can match the lower bound agreement probability remains unknown.
> 
> In this work, we resolve this long-standing open question. We present a protocol that matches the lower bound up to constant factors. Our results hold under a (strongly rushing) adaptive adversary that can corrupt up to \(t = (1-\epsilon )n/2\) parties, and our protocols use a public-key infrastructure and a trusted setup for unique threshold signatures. This is the first protocol that decreases the failure probability (overall) by a super-constant factor per round.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_4](https://doi.org/10.1007/978-3-031-06944-4_4)
## A Complete Characterization of Game-Theoretically Fair, Multi-Party Coin Toss.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)
### Authors
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> Cleve’s celebrated lower bound (STOC’86) showed that a de facto strong fairness notion is impossible in 2-party coin toss, i.e., the corrupt party always has a strategy of biasing the honest party’s outcome by a noticeable amount. Nonetheless, Blum’s famous coin-tossing protocol (CRYPTO’81) achieves a strictly weaker “game-theoretic” notion of fairness—specifically, it is a 2-party coin toss protocol in which neither party can bias the outcome towards its own preference; and thus the honest protocol forms a Nash equilibrium in which neither party would want to deviate. Surprisingly, an n-party analog of Blum’s famous coin toss protocol was not studied till recently. The work by Chung et al. (TCC’18) was the first to explore the feasibility of game-theoretically fair n-party coin toss in the presence of corrupt majority. We may assume that each party has a publicly stated preference for either the bit 0 or 1, and if the outcome agrees with the party’s preference, it obtains utility 1; else it obtains nothing.
> 
> A natural game-theoretic formulation is to require that the honest protocol form a coalition-resistant Nash equilibrium, i.e., no coalition should have incentive to deviate from the honest behavior. Chung et al. phrased this game-theoretic notion as “cooperative-strategy-proofness” or “CSP-fairness” for short. Unfortunately, Chung et al. showed that under \((n-1)\)-sized coalitions, it is impossible to design such a CSP-fair coin toss protocol, unless all parties except one prefer the same bit.
> 
> In this paper, we show that the impossibility of Chung et al. is in fact not as broad as it may seem. When coalitions are majority but not \(n-1\) in size, we can indeed get feasibility results in some meaningful parameter regimes. We give a complete characterization of the regime in which CSP-fair coin toss is possible, by providing a matching upper- and lower-bound. Our complete characterization theorem also shows that the mathematical structure of game-theoretic fairness is starkly different from the de facto strong fairness notion in the multi-party computation literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_5](https://doi.org/10.1007/978-3-031-06944-4_5)
## Lightweight, Maliciously Secure Verifiable Function Secret Sharing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing)
### Authors
* Leo de Castro, MIT, Cambridge, USA
* Anitgoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### Abstract
> In this work, we present a lightweight construction of verifiable two-party function secret sharing (FSS) for point functions and multi-point functions. Our verifiability method is lightweight in two ways. Firstly, it is concretely efficient, making use of only symmetric key operations and no public key or MPC techniques are involved. Our performance is comparable with the state-of-the-art non-verifiable DPF constructions, and we outperform all prior DPF verification techniques in both computation and communication complexity, which we demonstrate with an implementation of our scheme. Secondly, our verification procedure is essentially unconstrained. It will verify that distributed point function (DPF) shares correspond to some point function irrespective of the output group size, the structure of the DPF output, or the set of points on which the DPF must be evaluated. This is in stark contrast with prior works, which depend on at least one and often all three of these constraints. In addition, our construction is the first DPF verification protocol that can verify general DPFs while remaining secure even if one server is malicious. Prior work on maliciously secure DPF verification could only verify DPFs where the non-zero output is binary and the output space is a large field.
> 
> As an additional feature, our verification procedure can be batched so that verifying a polynomial number of DPF shares requires the exact same amount of communication as verifying one pair of DPF shares. We combine this packed DPF verification with a novel method for packing DPFs into shares of a multi-point function where the evaluation time, verification time, and verification communication are independent of the number of non-zero points in the function.
> 
> An immediate corollary of our results are two-server protocols for PIR and PSI that remain secure when any one of the three parties is malicious (either the client or one of the servers).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_6](https://doi.org/10.1007/978-3-031-06944-4_6)
## Highly Efficient OT-Based Multiplication Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols)
### Authors
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, Check Point Institute for Information Security, Tel Aviv, Israel
* Nikolaos Makriyannis, Fireblocks, New York, USA
* Samuel Ranellucci, Coinbase, San Francisco, USA
* Eliad Tsfadia, Google Research, Tel Aviv, Israel
### Abstract
> We present a new \({\text {OT}}\)-based two-party multiplication protocol that is almost as efficient as Gilboa’s semi-honest protocol (Crypto ’99), but has a high-level of security against malicious adversaries without further compilation. The achieved security suffices for many applications, and, assuming DDH, can be cheaply compiled into full security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_7](https://doi.org/10.1007/978-3-031-06944-4_7)
## Round-Optimal Black-Box Protocol Compilers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### Abstract
> We give black-box, round-optimal protocol compilers from semi-honest security to malicious security in the Random Oracle Model (ROM) and in the 1-out-of-2 OT correlations model. We use our compilers to obtain the following results:
> 
> A two-round, two-party protocol secure against malicious adversaries in the random oracle model making black-box use of a two-round semi-honest secure protocol. Prior to our work, such a result was not known even considering special functionalities such as a two-round oblivious transfer. This result also implies the first constructions of two-round malicious (batch) OT/OLE in the random oracle model based on the black-box use of two-round semi-honest (batch) OT/OLE.
> 
> A three-round multiparty secure computation protocol in the random oracle model secure against malicious adversaries that is based on the black-box use of two-round semi-honest OT. This protocol matches a known round complexity lower bound due to Applebaum et al. (ITCS’20) and is based on a minimal cryptographic hardness assumption.
> 
> A two-round, multiparty secure computation protocol in the 1-out-of-2 OT correlations model that is secure against malicious adversaries and makes black-box use of cryptography. This gives new round-optimal protocols for computing arithmetic branching programs that are statistically secure and makes black-box use of the underlying field.
> 
> As a contribution of independent interest, we provide a new variant of the IPS compiler (Ishai, Prabhakaran and Sahai, Crypto 2008) in the two-round setting, where we relax requirements on the IPS “inner protocol” by strengthening the “outer protocol”.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_8](https://doi.org/10.1007/978-3-031-06944-4_8)
## Guaranteed Output in $O(\sqrt{n})$ Rounds for Round-Robin Sampling Protocols.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)
### Authors
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Northeastern University, Boston, UK
* Yashvanth Kondi, Northeastern University, Boston, UK
* Abhi Shelat, Northeastern University, Boston, UK
### Abstract
> We introduce a notion of round-robin secure sampling that captures several protocols in the literature, such as the “powers-of-tau” setup protocol for pairing-based polynomial commitments and zk-SNARKs, and certain verifiable mixnets.
> 
> Due to their round-robin structure, protocols of this class inherently require n sequential broadcast rounds, where n is the number of participants.
> 
> We describe how to compile them generically into protocols that require only \(O(\sqrt{n})\) broadcast rounds. Our compiled protocols guarantee output delivery against any dishonest majority. This stands in contrast to prior techniques, which require \(\varOmega (n)\) sequential broadcasts in most cases (and sometimes many more). Our compiled protocols permit a certain amount of adversarial bias in the output, as all sampling protocols with guaranteed output must, due to Cleve’s impossibility result (STOC’86). We show that in the context of the aforementioned applications, this bias is harmless.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_9](https://doi.org/10.1007/978-3-031-06944-4_9)
## Universally Composable Subversion-Resilient Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography)
### Authors
* Suvradip Chakraborty, ETH Zurich, Zürich, Switzerland
* Bernardo Magri, The University of Manchester, Manchester, UK
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### Abstract
> Subversion attacks undermine security of cryptographic protocols by replacing a legitimate honest party’s implementation with one that leaks information in an undetectable manner. An important limitation of all currently known techniques for designing cryptographic protocols with security against subversion attacks is that they do not automatically guarantee security in the realistic setting where a protocol session may run concurrently with other protocols.
> 
> We remedy this situation by providing a foundation of reverse firewalls (Mironov and Stephens-Davidowitz, EUROCRYPT’15) in the universal composability (UC) framework (Canetti, FOCS’01 and J. ACM’20). More in details, our contributions are threefold:
> 
> We generalize the UC framework to the setting where each party consists of a core (which has secret inputs and is in charge of generating protocol messages) and a firewall (which has no secrets and sanitizes the outgoing/incoming communication from/to the core). Both the core and the firewall can be subject to different flavors of corruption, modeling different kinds of subversion attacks. For instance, we capture the setting where a subverted core looks like the honest core to any efficient test, yet it may leak secret information via covert channels (which we call specious subversion).
> 
> We show how to sanitize UC commitments and UC coin tossing against specious subversion, under the DDH assumption.
> 
> We show how to sanitize the classical GMW compiler (Goldreich, Micali and Wigderson, STOC 1987) for turning MPC with security in the presence of semi-honest adversaries into MPC with security in the presence of malicious adversaries. This yields a completeness theorem for maliciously secure MPC in the presence of specious subversion.
> 
> Additionally, all our sanitized protocols are transparent, in the sense that communicating with a sanitized core looks indistinguishable from communicating with an honest core. Thanks to the composition theorem, our methodology allows, for the first time, to design subversion-resilient protocols by sanitizing different sub-components in a modular way.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_10](https://doi.org/10.1007/978-3-031-06944-4_10)
## Asymptotically Quasi-Optimal Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography)
### Authors
* Leo de Castro, MIT, Cambridge, UK
* Vinod Vaikuntanathan, MIT, Cambridge, UK
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Muthu Venkitasubramaniam, Georgetown University, Washington, USA
### Abstract
> The question of minimizing the computational overhead of cryptography was put forward by the work of Ishai, Kushilevitz, Ostrovsky and Sahai (STOC 2008). The main conclusion was that, under plausible assumptions, most cryptographic primitives can be realized with constant computational overhead. However, this ignores an additive term that may depend polynomially on the (concrete) computational security parameter \(\lambda \). In this work, we study the question of obtaining optimal efficiency, up to polylogarithmic factors, for all choices of n and \(\lambda \), where n is the size of the given task. In particular, when \(n=\lambda \), we would like the computational cost to be only \(\tilde{O}(\lambda )\). We refer to this goal as asymptotically quasi-optimal (AQO) cryptography.
> 
> We start by realizing the first AQO semi-honest batch oblivious linear evaluation (BOLE) protocol. Our protocol applies to OLE over small fields and relies on the near-exponential security of the ring learning with errors (RLWE) assumption. Building on the above and on known constructions of AQO PCPs, we design the first AQO zero-knowledge (ZK) argument system for Boolean circuit satisfiability. Our construction combines a new AQO ZK-PCP construction that respects the AQO property of the underlying PCP along with a technique for converting statistical secrecy into soundness via OLE reversal. Finally, combining the above results, we get AQO secure computation protocols for Boolean circuits with security against malicious parties under RLWE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_11](https://doi.org/10.1007/978-3-031-06944-4_11)
## Round-Optimal Multi-party Computation with Identifiable Abort.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort)
### Authors
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### Abstract
> Secure multi-party computation (MPC) protocols that are resilient to a dishonest majority allow the adversary to get the output of the computation while, at the same time, forcing the honest parties to abort. Aumann and Lindell introduced the enhanced notion of security with identifiable abort, which still allows the adversary to trigger an abort but, at the same time, it enables the honest parties to agree on the identity of the party that led to the abort. More recently, in Eurocrypt 2016, Garg et al. showed that, assuming access to a simultaneous message exchange channel for all the parties, at least four rounds of communication are required to securely realize non-trivial functionalities in the plain model.
> 
> Following Garg et al., a sequence of works has matched this lower bound, but none of them achieved security with identifiable abort. In this work, we close this gap and show that four rounds of communication are also sufficient to securely realize any functionality with identifiable abort using standard and generic polynomial-time assumptions. To achieve this result we introduce the new notion of bounded-rewind secure MPC that guarantees security even against an adversary that performs a mild form of reset attacks. We show how to instantiate this primitive starting from any MPC protocol and by assuming trapdoor-permutations.
> 
> The notion of bounded-rewind secure MPC allows for easier parallel composition of MPC protocols with other (interactive) cryptographic primitives. Therefore, we believe that this primitive can be useful in other contexts in which it is crucial to combine multiple primitives with MPC protocols while keeping the round complexity of the final protocol low.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_12](https://doi.org/10.1007/978-3-031-06944-4_12)
## On the Security of ECDSA with Additive Key Derivation and Presignatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)
### Authors
* Jens Groth, DFINITY, Zurich, Switzerland
* Victor Shoup, DFINITY, Zurich, Switzerland
### Abstract
> Two common variations of ECDSA signatures are additive key derivation and presignatures. Additive key derivation is a simple mechanism for deriving many subkeys from a single master key, and is already widely used in cryptocurrency applications with the Hierarchical Deterministic Wallet mechanism standardized in Bitcoin Improvement Proposal 32 (BIP32). Because of its linear nature, additive key derivation is also amenable to efficient implementation in the threshold setting. With presignatures, the secret and public nonces used in the ECDSA signing algorithm are precomputed. In the threshold setting, using presignatures along with other precomputed data allows for an extremely efficient “online phase” of the protocol. Recent works have advocated for both of these variations, sometimes combined together. However, somewhat surprisingly, we are aware of no prior security proof for additive key derivation, let alone for additive key derivation in combination with presignatures.
> 
> In this paper, we provide a thorough analysis of these variations, both in isolation and in combination. Our analysis is in the generic group model (GGM). Importantly, we do not modify ECDSA or weaken the standard notion of security in any way. Of independent interest, we also present a version of the GGM that is specific to elliptic curves. This EC-GGM better models some of the idiosyncrasies (such as the conversion function and malleability) of ECDSA. In addition to this analysis, we report security weaknesses in these variations that apparently have not been previously reported. For example, we show that when both variations are combined, there is a cube-root attack on ECDSA, which is much faster than the best known, square-root attack on plain ECDSA. We also present two mitigations against these weaknesses: re-randomized presignatures and homogeneous key derivation. Each of these mitigations is very lightweight, and when used in combination, the security is essentially the same as that of plain ECDSA (in the EC-GGM).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_13](https://doi.org/10.1007/978-3-031-06944-4_13)
## Secure Multiparty Computation with Free Branching.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching)
### Authors
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
### Abstract
> We study secure multi-party computation (MPC) protocols for branching circuits that contain multiple sub-circuits (i.e., branches) and the output of the circuit is that of single “active” branch. Crucially, the identity of the active branch must remain hidden from the protocol participants.
> 
> While such circuits can be securely computed by evaluating each branch and then multiplexing the output, such an approach incurs a communication cost linear in the size of the entire circuit. To alleviate this, a series of recent works have investigated the problem of reducing the communication cost of branching executions inside MPC (without relying on fully homomorphic encryption). Most notably, the stacked garbling paradigm [Heath and Kolesnikov, CRYPTO’20] yields garbled circuits for branching circuits whose size only depends on the size of the largest branch. Presently, however, it is not known how to obtain similar communication improvements for secure computation involving more than two parties.
> 
> In this work, we provide a generic framework for branching multi-party computation that supports any number of parties. The communication complexity of our scheme is proportional to the size of the largest branch and the computation is linear in the size of the entire circuit. We provide an implementation and benchmarks to demonstrate practicality of our approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_14](https://doi.org/10.1007/978-3-031-06944-4_14)
## Secure Multiparty Computation with Sublinear Preprocessing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing)
### Authors
* Elette Boyle, Reichman University (IDC Herzliya), and NTT Research, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### Abstract
> A common technique for enhancing the efficiency of secure multiparty computation (MPC) with dishonest majority is via preprocessing: In an offline phase, parties engage in an input-independent protocol to securely generate correlated randomness. Once inputs are known, the correlated randomness is consumed by a “non-cryptographic” and highly efficient online protocol.
> 
> The correlated randomness in such protocols traditionally comes in two flavors: multiplication triples (Beaver, Crypto ’91), which suffice for security against semi-honest parties, and authenticated multiplication triples (Bendlin et al., Eurocrypt ’11, Damgård et al., Crypto ’12) that yield efficient protocols against malicious parties.
> 
> Recent constructions of pseudorandom correlation generators (Boyle et al., Crypto ’19, ’20) enable concretely efficient secure generation of multiplication triples with sublinear communication complexity. However, these techniques do not efficiently apply to authenticated triples, except in the case of secure two-party computation of arithmetic circuits over large fields.
> 
> In this work, we propose the first concretely efficient approach for (malicious) MPC with preprocessing in which the offline communication is sublinear in the circuit size. More specifically, the offline communication scales with the square root of the circuit size.
> 
> From a feasibility point of view, our protocols can make use of any secure protocol for generating (unauthenticated) multiplication triples together with any additive homomorphic encryption. We propose concretely efficient instantiations (based on strong but plausible “linear-only” assumptions) from existing homomorphic encryption schemes and pseudorandom correlation generators.
> 
> Our technique is based on a variant of a recent protocol of Boyle et al. (Crypto ’21) for MPC with preprocessing. As a result, our protocols inherit the succinct correlated randomness feature of the latter protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_15](https://doi.org/10.1007/978-3-031-06944-4_15)
## Practical Non-interactive Publicly Verifiable Secret Sharing with Thousands of Parties.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)
### Authors
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Vadim Lyubashevsky, IBM Research, Ruschlikon, Switzerland
### Abstract
> Non-interactive publicly verifiable secret sharing (PVSS) schemes enables (re-)sharing of secrets in a decentralized setting in the presence of malicious parties. A recently proposed application of PVSS schemes is to enable permissionless proof-of-stake blockchains to “keep a secret” via a sequence of committees that share that secret. These committees can use the secret to produce signatures on the blockchain’s behalf, or to disclose hidden data conditioned on consensus that some event has occurred. That application needs very large committees with thousands of parties, so the PVSS scheme in use must be efficient enough to support such large committees, in terms of both computation and communication. Yet, previous PVSS schemes have large proofs and/or require many exponentiations over large groups.
> 
> We present a non-interactive PVSS scheme in which the underlying encryption scheme is based on the learning with errors (LWE) problem. While lattice-based encryption schemes are very fast, they often have long ciphertexts and public keys. We use the following two techniques to conserve bandwidth: First, we adapt the Peikert-Vaikuntanathan-Waters (PVW) encryption scheme to the multi-receiver setting, so that the bulk of the parties’ keys is a common random string. The resulting scheme yields \(\varOmega (1)\) amortized plaintext/ciphertext rate, where concretely the rate is \(\approx 1/60\) for 100 parties, \(\approx 1/8\) for 1000 parties, and approaching 1/2 as the number of parties grows. Second, we use bulletproofs over a DL-group of order about 256 bits to get compact proofs of correct encryption/decryption of shares.
> 
> Alternating between the lattice and DL settings is relatively painless, as we equate the LWE modulus with the order of the group. We also show how to reduce the the number of exponentiations in the bulletproofs by applying Johnson-Lindenstrauss-like compression to reduce the dimension of the vectors whose properties must be verified.
> 
> An implementation of our PVSS with 1000 parties showed that it is feasible even at that size, and should remain so even with one or two order of magnitude increase in the committee size.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_16](https://doi.org/10.1007/978-3-031-06944-4_16)
## Sine Series Approximation of the Mod Function for Bootstrapping of Approximate HE.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)
### Authors
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
* Nathan Manohar, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
### Abstract
> While it is well known that the sawtooth function has a point-wise convergent Fourier series, the rate of convergence is not the best possible for the application of approximating the mod function in small intervals around multiples of the modulus. We show a different sine series, such that the sine series of order n has error \(O(\epsilon ^{2n+1})\) for approximating the mod function in \(\epsilon \)-sized intervals around multiples of the modulus. Moreover, the resulting polynomial, after Taylor series approximation of the sine function, has small coefficients, and the whole polynomial can be computed at a precision that is only slightly larger than \(-(2n+1)\log \epsilon \), the precision of approximation being sought. This polynomial can then be used to approximate the mod function to almost arbitrary precision, and hence allows practical CKKS-HE bootstrapping with arbitrary precision. We validate our approach by an implementation and obtain 100 bit precision bootstrapping as well as improvements over prior work even at lower precision.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_17](https://doi.org/10.1007/978-3-031-06944-4_17)
## Limits of Polynomial Packings for $\mathbb {Z}_{p^k}$ and $\mathbb {F}_{p^k}$.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)
### Authors
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### Abstract
> We formally define polynomial packing methods and initiate a unified study of related concepts in various contexts of cryptography. This includes homomorphic encryption (HE) packing and reverse multiplication-friendly embedding (RMFE) in information-theoretically secure multi-party computation (MPC). We prove several upper bounds and impossibility results on packing methods for \(\mathbb {Z}_{p^k}\) or \(\mathbb {F}_{p^k}\)-messages into \(\mathbb {Z}_{p^t}[x]/f(x)\) in terms of (i) packing density, (ii) level-consistency, and (iii) surjectivity. These results have implications on recent development of HE-based MPC over \(\mathbb {Z}_{2^k}\) secure against actively corrupted majority and provide new proofs for upper bounds on RMFE.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_18](https://doi.org/10.1007/978-3-031-06944-4_18)
## High-Precision Bootstrapping for Approximate Homomorphic Encryption by Error Variance Minimization.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)
### Authors
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* HyungChul Kang, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Korea
* Yongjune Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Korea
### Abstract
> The Cheon-Kim-Kim-Song (CKKS) scheme (Asiacrypt’17) is one of the most promising homomorphic encryption (HE) schemes as it enables privacy-preserving computing over real (or complex) numbers. It is known that bootstrapping is the most challenging part of the CKKS scheme. Further, homomorphic evaluation of modular reduction is the core of the CKKS bootstrapping. As modular reduction is not represented by the addition and multiplication of complex numbers, approximate polynomials for modular reduction should be used. The best-known techniques (Eurocrypt’21) use a polynomial approximation for trigonometric functions and their composition. However, all the previous methods are based on an indirect approximation, and thus it requires lots of multiplicative depth to achieve high accuracy. This paper proposes a direct polynomial approximation of modular reduction for CKKS bootstrapping, which is optimal in error variance and depth. Further, we propose an efficient algorithm, namely the lazy baby-step giant-step (BSGS) algorithm, to homomorphically evaluate the approximate polynomial, utilizing the lazy relinearization/rescaling technique. The lazy-BSGS reduces the computational complexity by half compared to the ordinary BSGS algorithm. The performance improvement for the CKKS scheme by the proposed algorithm is verified by implementation using HE libraries. The implementation results show that the proposed method has a multiplicative depth of 10 for modular reduction to achieve the state-of-the-art accuracy, while the previous methods have depths of 11 to 12. Moreover, we achieve higher accuracy within a small multiplicative depth, for example, 93-bit within multiplicative depth 11.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_19](https://doi.org/10.1007/978-3-031-06944-4_19)
## Rubato: Noisy Ciphers for Approximate Homomorphic Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)
### Authors
* Jincheol Ha, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Mincheol Son, KAIST, Daejeon, Korea
* Seongkwang Kim, Samsung SDS, Seoul, Korea
### Abstract
> A transciphering framework converts a symmetric ciphertext into a homomorphic ciphertext on the server-side, reducing computational and communication overload on the client-side. In Asiacrypt 2021, Cho et al. proposed the \(\mathsf {RtF}\) framework that supports approximate computation.
> 
> In this paper, we propose a family of noisy ciphers, dubbed \(\mathsf {Rubato}\), with a novel design strategy of introducing noise to a symmetric cipher of a low algebraic degree. With this strategy, the multiplicative complexity of the cipher is significantly reduced, compared to existing HE-friendly ciphers, without degrading the overall security. More precisely, given a moderate block size (16 to 64), \(\mathsf {Rubato}\) enjoys a low multiplicative depth (2 to 5) and a small number of multiplications per encrypted word (2.1 to 6.25) at the cost of slightly larger ciphertext expansion (1.26 to 1.31). The security of \(\mathsf {Rubato}\) is supported by comprehensive analysis including symmetric and LWE cryptanalysis. Compared to \(\mathsf {HERA}\) within the \(\mathsf {RtF}\) framework, client-side and server-side throughput is improved by 22.9% and 32.2%, respectively, at the cost of only 1.6% larger ciphertext expansion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_20](https://doi.org/10.1007/978-3-031-06944-4_20)
## Field Instruction Multiple Data.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data)
### Authors
* Khin Mi Mi Aung, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Enhui Lim, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Benjamin Hong Meng Tan, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Sze Ling Yeo, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Jun Jie Sim, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Fully homomorphic encryption (FHE) has flourished since it was first constructed by Gentry (STOC 2009). Single instruction multiple data (SIMD) gave rise to efficient homomorphic operations on vectors in \((\mathbb {F}_{t^d})^\ell \), for prime \(t\). RLWE instantiated with cyclotomic polynomials of the form \(X^{2^N}+1\) dominate implementations of FHE due to highly efficient fast Fourier transformations. However, this choice yields very short SIMD plaintext vectors and high degree extension fields, e.g. \(\ell < 100, d > 100\) for small primes (\(t = 3, 5, \dots \)).
> 
> In this work, we describe a method to encode more data on top of SIMD, Field Instruction Multiple Data, applying reverse multiplication friendly embedding (RMFE) to FHE. With RMFE, length-\(k\) \(\mathbb {F}_{t}\) vectors can be encoded into \(\mathbb {F}_{t^d}\) and multiplied once. The results have to be recoded (decoded and then re-encoded) before further multiplications can be done. We introduce an FHE-specific technique to additionally evaluate arbitrary linear transformations on encoded vectors for free during the FHE recode operation. On top of that, we present two optimizations to unlock high degree extension fields with small \(t\) for homomorphic computation: \(r\)-fold RMFE, which allows products of up to \(2^r\) encoded vectors before recoding, and a three-stage recode process for RMFEs obtained by composing two smaller RMFEs. Experiments were performed to evaluate the effectiveness of FIMD from various RMFEs compared to standard SIMD operations. Overall, we found that FIMD generally had \(>2{\times }\) better (amortized) multiplication times compared to FHE for the same amount of data, while using almost \(k/2{\times }\) fewer ciphertexts required.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_21](https://doi.org/10.1007/978-3-031-06944-4_21)
## Cryptanalysis of Candidate Obfuscators for Affine Determinant Programs.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)
### Authors
* Li Yao, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yilei Chen, Tsinghua University, Beijing, 100084, China
* Yilei Chen, Shanghai Qi Zhi Institute, Shanghai, 200232, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, 200232, China
### Abstract
> At ITCS 2020, Bartusek et al. proposed a candidate indistinguishability obfuscator (\(i\mathcal {O}\)) for affine determinant programs (ADPs). The candidate is special since it directly applies specific randomization techniques to the underlying ADP, without relying on the hardness of traditional cryptographic assumptions like discrete-log or learning with errors. It is relatively efficient compared to the rest of the \(i\mathcal {O}\) candidates. However, the obfuscation scheme requires further cryptanalysis since it was not known to be based on any well-formed mathematical assumptions.
> 
> In this paper, we show cryptanalytic attacks on the \(i\mathcal {O}\) candidate provided by Bartusek et al. Our attack exploits the weakness of one of the randomization steps in the candidate. The attack applies to a fairly general class of programs. At the end of the paper we discuss plausible countermeasures to defend against our attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_22](https://doi.org/10.1007/978-3-031-06944-4_22)
## Indistinguishability Obfuscation from LPN over $\mathbb {F}_p$, DLIN, and PRGs in NC0.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)
### Authors
* Aayush Jain, NTT Research and Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> In this work, we study what minimal sets of assumptions suffice for constructing indistinguishability obfuscation (\(i\mathcal {O}\)). We prove:
> 
> Theorem(Informal): Assume sub-exponential security of the following assumptions:
> 
> – the Learning Parity with Noise (\(\mathsf {LPN}\)) assumption over general prime fields \(\mathbb {F}_p\) with polynomially many \(\mathsf {LPN}\) samples and error rate \(1/k^\delta \), where k is the dimension of the \(\mathsf {LPN}\) secret, and \(\delta >0\) is any constant;
> 
> – the existence of a Boolean Pseudo-Random Generator (\(\mathsf {PRG}\)) in \(\mathsf {NC}^0\) with stretch \(n^{1+\tau }\), where n is the length of the \(\mathsf {PRG}\) seed, and \(\tau >0\) is any constant;
> 
> – the Decision Linear (\(\mathsf {DLIN}\)) assumption on symmetric bilinear groups of prime order.
> 
> Then, (subexponentially secure) indistinguishability obfuscation for all polynomial-size circuits exists. Further, assuming only polynomial security of the aforementioned assumptions, there exists collusion resistant public-key functional encryption for all polynomial-size circuits.
> 
> This removes the reliance on the Learning With Errors (LWE) assumption from the recent work of [Jain, Lin, Sahai STOC’21]. As a consequence, we obtain the first fully homomorphic encryption scheme that does not rely on any lattice-based hardness assumption.
> 
> Our techniques feature a new notion of randomized encoding called Preprocessing Randomized Encoding (PRE), that essentially can be computed in the exponent of pairing groups. When combined with other new techniques, PRE gives a much more streamlined construction of \(i\mathcal {O}\) while still maintaining reliance only on well-studied assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_23](https://doi.org/10.1007/978-3-031-06944-4_23)
## Incompressible Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography)
### Authors
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, CA, 94085, USA
### Abstract
> Incompressible encryption allows us to make the ciphertext size flexibly large and ensures that an adversary learns nothing about the encrypted data, even if the decryption key later leaks, unless she stores essentially the entire ciphertext. Incompressible signatures can be made arbitrarily large and ensure that an adversary cannot produce a signature on any message, even one she has seen signed before, unless she stores one of the signatures essentially in its entirety.
> 
> In this work, we give simple constructions of both incompressible public-key encryption and signatures under minimal assumptions. Furthermore, large incompressible ciphertexts (resp. signatures) can be decrypted (resp. verified) in a streaming manner with low storage. In particular, these notions strengthen the related concepts of disappearing encryption and signatures, recently introduced by Guan and Zhandry (TCC 2021), whose previous constructions relied on sophisticated techniques and strong, non-standard assumptions. We extend our constructions to achieve an optimal “rate”, meaning the large ciphertexts (resp. signatures) can contain almost equally large messages, at the cost of stronger assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_24](https://doi.org/10.1007/978-3-031-06944-4_24)
## COA-Secure Obfuscation and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Suvradip Chakraborty, ETH Zürich, Zürich, Switzerland
* Dakshita Khurana, UIUC, Champaign, USA
* Nishant Kumar, UIUC, Champaign, USA
* Oxana Poburinnaya, Boston, USA
* Manoj Prabhakaran, IIT Bombay, Mumbai, India
### Abstract
> We put forth a new paradigm for program obfuscation, where obfuscated programs are endowed with proofs of “well formedness.” In addition to asserting existence of an underlying plaintext program with an attested structure, these proofs also prevent mauling attacks, whereby an adversary surreptitiously creates an obfuscated program based on secrets which are embedded in other obfuscated programs. We call this new guarantee Chosen Obfuscation Attacks (COA) security.
> 
> We show how to enhance a large class of obfuscation mechanisms to be COA-secure, assuming subexponentially secure IO for circuits and subexponentially secure one-way functions. To demonstrate the power of the new notion, we also use it to realize:
> 
> A new form of software watermarking, which provides significantly broader protection than current schemes against counterfeits that pass a keyless, public verification process.
> 
> Completely CCA encryption, which is a strengthening of completely non-malleable encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_25](https://doi.org/10.1007/978-3-031-06944-4_25)
## Unclonable Polymers and Their Cryptographic Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications)
### Authors
* Ghada Almashaqbeh, University of Connecticut, Storrs, USA
* Ran Canetti, Boston University, Boston, USA
* Yaniv Erlich, Eleven Therapeutics and IDC Herzliya, Herzliya, Israel
* Jonathan Gershoni, Tel Aviv University, Tel Aviv, Israel
* Anna Roitburd-Berman, Tel Aviv University, Tel Aviv, Israel
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
* Tal Malkin, Columbia University, New York, USA
* Itsik Pe’er, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
### Abstract
> We propose a mechanism for generating and manipulating protein polymers to obtain a new type of consumable storage that exhibits intriguing cryptographic “self-destruct” properties, assuming the hardness of certain polymer-sequencing problems.
> 
> To demonstrate the cryptographic potential of this technology, we first develop a formalism that captures (in a minimalistic way) the functionality and security properties provided by the technology. Next, using this technology, we construct and prove security of two cryptographic applications that are currently obtainable only via trusted hardware that implements logical circuitry (either classical or quantum). The first application is a password-controlled secure vault where the stored data is irrecoverably erased once a threshold of unsuccessful access attempts is reached. The second is (a somewhat relaxed version of) one time programs, namely a device that allows evaluating a secret function only a limited number of times before self-destructing, where each evaluation is made on a fresh user-chosen input.
> 
> Finally, while our constructions, modeling, and analysis are designed to capture the proposed polymer-based technology, they are sufficiently general to be of potential independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_26](https://doi.org/10.1007/978-3-031-06944-4_26)
## Distributed (Correlation) Samplers: How to Remove a Trusted Dealer in One Round.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)
### Authors
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### Abstract
> Structured random strings (SRSs) and correlated randomness are important for many cryptographic protocols. In settings where interaction is expensive, it is desirable to obtain such randomness in as few rounds of communication as possible; ideally, simply by exchanging one reusable round of messages which can be considered public keys.
> 
> In this paper, we describe how to generate any SRS or correlated randomness in such a single round of communication, using, among other things, indistinguishability obfuscation. We introduce what we call a distributed sampler, which enables \(n\) parties to sample a single public value (SRS) from any distribution. We construct a semi-malicious distributed sampler in the plain model, and use it to build a semi-malicious public-key PCF (Boyle et al., FOCS 2020) in the plain model. A public-key PCF can be thought of as a distributed correlation sampler; instead of producing a public SRS, it gives each party a private random value (where the values satisfy some correlation).
> 
> We introduce a general technique called an anti-rusher which compiles any one-round protocol with semi-malicious security without inputs to a similar one-round protocol with active security by making use of a programmable random oracle. This gets us actively secure distributed samplers and public-key PCFs in the random oracle model.
> 
> Finally, we explore some tradeoffs. Our first PCF construction is limited to reverse-sampleable correlations (where the random outputs of honest parties must be simulatable given the random outputs of corrupt parties); we additionally show a different construction without this limitation, but which does not allow parties to hold secret parameters of the correlation. We also describe how to avoid the use of a random oracle at the cost of relying on sub-exponentially secure indistinguishability obfuscation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_27](https://doi.org/10.1007/978-3-031-06944-4_27)
