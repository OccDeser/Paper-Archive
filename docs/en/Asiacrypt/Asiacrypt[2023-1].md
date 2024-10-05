# Asiacrypt[2023-1]
## Breaking the Size Barrier: Universal Circuits Meet Lookup Tables.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#breaking-the-size-barrier-universal-circuits-meet-lookup-tables)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#breaking-the-size-barrier-universal-circuits-meet-lookup-tables)
### Authors
* Yann Disser, Technical University of Darmstadt, Darmstadt, Germany
* Daniel Günther, Technical University of Darmstadt, Darmstadt, Germany
* Thomas Schneider, Technical University of Darmstadt, Darmstadt, Germany
* Maximilian Stillger, Technical University of Darmstadt, Darmstadt, Germany
* Arthur Wigandt, Technical University of Darmstadt, Darmstadt, Germany
* Hossein Yalame, Technical University of Darmstadt, Darmstadt, Germany
### Abstract
> A Universal Circuit (UC) is a Boolean circuit of size \(\varTheta (n \log n)\) that can simulate any Boolean function up to a certain size n. Valiant (STOC’76) provided the first two UC constructions of asymptotic sizes \(\sim 5 n\log n\) and \(\sim 4.75 n\log n\), and today’s most efficient construction of Liu et al. (CRYPTO’21) has size \(\sim 3n\log n\). Evaluating a public UC with a secure Multi-Party Computation (MPC) protocol allows efficient Private Function Evaluation (PFE), where a private function is evaluated on private data.
> 
> Previously, most UC constructions have only been developed for circuits consisting of 2-input gates. In this work, we generalize UCs to simulate circuits consisting of (\(\rho \) \(\rightarrow \) \(\omega \))-Lookup Tables (LUTs) that map \(\rho \) input bits to \(\omega \) output bits. Our LUT-based UC (LUC) construction has an asymptotic size of \(1.5\rho \omega n \log \omega n\) and improves the size of the UC over the best previous UC construction of Liu et al. (CRYPTO’21) by factors 1.12\(\times \)–\(2.18\times \) for common functions. Our results show that the greatest size improvement is achieved for \(\rho =3\) inputs, and it decreases for \(\rho >3\).
> 
> Furthermore, we introduce Varying Universal Circuits (VUCs), which reduce circuit size at the expense of leaking the number of inputs \(\rho \) and outputs \(\omega \) of each LUT. Our benchmarks demonstrate that VUCs can improve over the size of the LUC construction by a factor of up to \(1.45\times \).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_1](https://doi.org/10.1007/978-981-99-8721-4_1)
## Amortized NISC over $\mathbb {Z}_{2^k}$ from RMFE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#amortized-nisc-over-mathbb-z-2-k-from-rmfe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#amortized-nisc-over-mathbb-z-2-k-from-rmfe)
### Authors
* Fuchun Lin, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Yizhou Yao, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> Reversed multiplication friendly embedding (RMFE) amortization has been playing an active role in the state-of-the-art constructions of MPC protocols over rings (in particular, the ring \(\mathbb {Z}_{2^k}\)). As far as we know, this powerful technique has NOT been able to find applications in the crown jewel of two-party computation, the non-interactive secure computation (NISC), where the requirement of the protocol being non-interactive constitutes a formidable technical bottle-neck. We initiate such a study focusing on statistical NISC protocols in the VOLE-hybrid model. Our study begins with making the decomposable affine randomized encoding (DARE) based semi-honest NISC protocol compatible with RMFE techniques, which together with known techniques for forcing a malicious sender Sam to honestly follow DARE already yield a secure amortized protocol, assuming both parties follow RMFE encoding. Achieving statistical security in the full malicious setting is much more challenging, as applying known techniques for enforcing compliance with RMFE incurs interaction. To solve this problem, we put forward a new notion dubbed non-malleable RMFE (NM-RMFE), which is a randomized RMFE such that, once one party deviates from the encoding specification, the randomness injected by the other party will randomize the output, preventing information from being leaked. NM-RMFE simultaneously forces both parties to follow RMFE encoding, offering a desired non-interactive solution to amortizing NISC. We believe that NM-RMFE is on its own an important primitive that has applications in secure computation and beyond, interactive and non-interactive alike. With an asymptotically good instantiation of our NM-RMFE, we obtain the first statistical reusable NISC protocols in the VOLE-hybrid model with constant communication overhead for arithmetic branching programs over \(\mathbb {Z}_{2^k}\).
> 
> As side contributions, we consider computational security and present two concretely efficient NISC constructions in the random oracle model from conventional RMFEs.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_2](https://doi.org/10.1007/978-981-99-8721-4_2)
## Two-Round Concurrent 2PC from Sub-exponential LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#two-round-concurrent-2pc-from-sub-exponential-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#two-round-concurrent-2pc-from-sub-exponential-lwe)
### Authors
* Behzad Abdolmaleki, University of Sheffield, Sheffield, UK
* Saikrishna Badrinarayanan, LinkedIn, Mountain View, USA
* Rex Fernando, Carnegie Mellon University, Pittsburgh, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max Planck Institute for Security and Privacy, Bochum, Germany
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> Secure computation is a cornerstone of modern cryptography and a rich body of research is devoted to understanding its round complexity. In this work, we consider two-party computation (2PC) protocols (where both parties receive output) that remain secure in the realistic setting where many instances of the protocol are executed in parallel (concurrent security). We obtain a two-round concurrent-secure 2PC protocol based on a single, standard, post-quantum assumption: The subexponential hardness of the learning-with-errors (LWE) problem. Our protocol is in the plain model, i.e., it has no trusted setup, and it is secure in the super-polynomial simulation framework of Pass (EUROCRYPT 2003). Since two rounds are minimal for (concurrent) 2PC, this work resolves the round complexity of concurrent 2PC from standard assumptions.
> 
> As immediate applications, our work establishes feasibility results for interesting cryptographic primitives, such as the first two-round password authentication key exchange (PAKE) protocol in the plain model and the first two-round concurrent secure computation protocol for quantum circuits (2PQC).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_3](https://doi.org/10.1007/978-981-99-8721-4_3)
## Degree-D Reverse Multiplication-Friendly Embeddings: Constructions and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#degree-d-reverse-multiplication-friendly-embeddings-constructions-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#degree-d-reverse-multiplication-friendly-embeddings-constructions-and-applications)
### Authors
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, USA
* Cheng Hong, Ant Group, Hangzhou, China
* Hongqing Liu, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
### Abstract
> In the recent work of (Cheon & Lee, Eurocrypt’22), the concept of a degree-D packing method was formally introduced, which captures the idea of embedding multiple elements of a smaller ring into a larger ring, so that element-wise multiplication in the former is somewhat “compatible” with the product in the latter. Then, several optimal bounds and results are presented, and furthermore, the concept is generalized from one multiplication to degrees larger than two. These packing methods encompass several constructions seen in the literature in contexts like secure multiparty computation and fully homomorphic encryption.
> 
> One such construction is the concept of reverse multiplication-friendly embeddings (RMFEs), which are essentially degree-2 packing methods. In this work we generalize the notion of RMFEs to degree-D RMFEs which, in spite of being “more algebraic” than packing methods, turn out to be essentially equivalent. Then, we present a general construction of degree-D RMFEs by generalizing the ideas on algebraic geometry used to construct traditional degree-2 RMFEs which, by the aforementioned equivalence, leads to explicit constructions of packing methods. Furthermore, our theory is given in a unified manner for general Galois rings, which include both rings of the form \(\mathbb {Z}_{p^k}\) and fields like \(\mathbb {F}_{p^k}\), which have been treated separately in prior works. We present multiple concrete sets of parameters for degree-D RMFEs (including \(D=2\)), which can be useful for future works.
> 
> Finally, we discuss interesting applications of our RMFEs, focusing in particular on the case of non-interactively generating high degree correlations for secure multiparty computation protocols. This requires the use of Shamir secret sharing for a large number of parties, which requires large-degree Galois ring extensions. Our RMFE enables the generation of such preprocessing data over small rings, without paying for the multiplicative overhead incurred by using Galois ring extensions of large degree. For our application we also construct along the way, as a side contribution of potential independent interest, a pseudo-random secret-sharing solution for non-interactive generation of packed Shamir-sharings over Galois rings with structured secrets, inspired by the PRSS solutions from (Benhamouda et al., TCC 2021).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_4](https://doi.org/10.1007/978-981-99-8721-4_4)
## Adaptive Distributional Security for Garbling Schemes with 𝒪(|x|) Online Complexity.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#adaptive-distributional-security-for-garbling-schemes-with-x-online-complexity)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#adaptive-distributional-security-for-garbling-schemes-with-x-online-complexity)
### Authors
* Estuardo Alpírez Bock, Xiphera, Espoo, Finland
* Chris Brzuska, Aalto University, Espoo, Finland
* Pihla Karanko, Aalto University, Espoo, Finland
* Kirthivaasan Puniamurthy, Aalto University, Espoo, Finland
* Sabine Oechsner, University of Edinburgh, Edinburgh, UK
### Abstract
> Garbling schemes allow to garble a circuit C and an input x such that C(x) can be computed while hiding both C and x. In the context of adaptive security, an adversary specifies the input to the circuit after seeing the garbled circuit, so that one can pre-process the garbling of C and later only garble the input x in the online phase. Since the online phase may be time-critical, it is an interesting question how much information needs to be transmitted in this phase and ideally, this should be close to \({|x|}\). Unfortunately, Applebaum, Ishai, Kushilevitz, and Waters (AIKW, CRYPTO 2013) show that for some circuits, specifically PRGs, achieving online complexity close to \({|x|}\) is impossible with simulation-based security, and Hubáček and Wichs (HW, ITCS 2015) show that online complexity of maliciously secure 2-party computation needs to grow with the incompressibility entropy of the function. We thus seek to understand under which circumstances optimal online complexity is feasible despite these strong lower bounds.
> 
> Our starting point is the observation that lower bounds (only) concern cryptographic circuits and that, when an embedded secret is not known to the adversary (distinguisher), then the lower bound techniques do not seem to apply. Our main contribution is distributional simulation-based security (DSIM), a framework for capturing weaker, yet meaningful simulation-based (adaptive) security which does not seem to suffer from impossibility results akin to AIKW. We show that DSIM can be used to prove security of a distributed symmetric encryption protocol built around garbling. We also establish a bootstrapping result from DSIM-security for \(\text {NC}^0\) circuits to DSIM-security for arbitrary polynomial-size circuits while preserving their online complexity.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_5](https://doi.org/10.1007/978-981-99-8721-4_5)
## MPC with Delayed Parties over Star-Like Networks.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#mpc-with-delayed-parties-over-star-like-networks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#mpc-with-delayed-parties-over-star-like-networks)
### Authors
* Mariana Gama, COSIC, KU Leuven, Leuven, Belgium
* Emad Heydari Beni, COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, COSIC, KU Leuven, Leuven, Belgium
* Oliver Zajonc, COSIC, KU Leuven, Leuven, Belgium
* Emad Heydari Beni, Nokia Bell Labs, Antwerp, Belgium
* Emmanuela Orsini, Bocconi University, Milan, Italy
* Nigel P. Smart, Zama Inc., Paris, France
### Abstract
> This paper examines multi-party computation protocols in the presence of two major constraints commonly encountered in deployed systems. Firstly, we consider the situation where the parties are connected not by direct point-to-point connections, but by a star-like topology with a few central post-office style relays. Secondly, we consider MPC protocols with a strong honest majority (\(t \ll n/2\)) in which we have stragglers (some parties are progressing slower than others). We model stragglers by allowing the adversary to delay messages to and from some parties for a given length of time.
> 
> We first prove that having only a single honest relay is enough to ensure consensus of the messages sent within a protocol; then, we show that special care must be taken to describe multiplication protocols in the case of relays and stragglers; finally, we present an efficient honest-majority MPC protocol which can be run ontop of the relays and which provides active-security with abort in the case of a strong honest majority, even when run with stragglers. We back up our protocol presentation with both experimental evaluations and simulations of the effect of the relays and delays on our protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_6](https://doi.org/10.1007/978-981-99-8721-4_6)
## Ramp Hyper-invertible Matrices and Their Applications to MPC Protocols.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#ramp-hyper-invertible-matrices-and-their-applications-to-mpc-protocols)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#ramp-hyper-invertible-matrices-and-their-applications-to-mpc-protocols)
### Authors
* Hongqing Liu, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, Shanghai Jiao Tong University, Shanghai, China
* Yanjiang Yang, Huawei International, Singapore, Singapore
### Abstract
> Beerliová-Trubíniová and Hirt introduced hyper-invertible matrix technique to construct the first perfectly secure MPC protocol in the presence of maximal malicious corruptions \(\lfloor \frac{n-1}{3} \rfloor \) with linear communication complexity per multiplication gate [5]. This matrix allows MPC protocol to generate correct shares of uniformly random secrets in the presence of malicious adversary. Moreover, the amortized communication complexity of generating each sharing is linear. Due to this prominent feature, the hyper-invertible matrix plays an important role in the construction of MPC protocol and zero-knowledge proof protocol where the randomness needs to be jointly generated. However, the downside of this matrix is that the size of its base field is linear in the size of its matrix. This means if we construct an n-party MPC protocol over \(\mathbb {F}_q\) via hyper-invertible matrix, q is at least 2n.
> 
> In this paper, we propose the ramp hyper-invertible matrix which can be seen as the generalization of hyper-invertible matrix. Our ramp hyper-invertible matrix can be defined over constant-size field regardless of the size of this matrix. Similar to the arithmetic secret sharing scheme, to apply our ramp hyper-invertible matrix to perfectly secure MPC protocol, the maximum number of corruptions has to be compromised to \(\frac{(1-\epsilon )n}{3}\). As a consequence, we present the first perfectly secure MPC protocol in the presence of \(\frac{(1-\epsilon )n}{3}\) malicious corruptions with constant communication complexity. Besides presenting the variant of hyper-invertible matrix, we overcome several obstacles in the construction of this MPC protocol. Our arithmetic secret sharing scheme over constant-size field is compatible with the player elimination technique, i.e., it supports the dynamic changes of party number and corrupted party number. Moreover, we rewrite the public reconstruction protocol to support the sharings over constant-size field. Putting these together leads to the constant-size field variant of celebrated MPC protocol in [5].
> 
> We note that although it was widely acknowledged that there exists an MPC protocol with constant communication complexity by replacing Shamir secret sharing scheme with arithmetic secret sharing scheme, there is no reference seriously describing such protocol in detail. Our work fills the missing detail by providing MPC primitive for any applications relying on MPC protocol of constant communication complexity. As an application of our perfectly secure MPC protocol which implies perfect robustness in the MPC-in-the-Head framework, we present the constant-rate zero-knowledge proof with 3 communication rounds. The previous work achieves constant-rate with 5 communication rounds [32] due to the statistical robustness of their MPC protocol. Another application of our ramp hyper-invertible matrix is the information-theoretic multi-verifier zero-knowledge for circuit satisfiability [44]. We manage to remove the dependence of the size of circuit and security parameter from the share size.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_7](https://doi.org/10.1007/978-981-99-8721-4_7)
## Scalable Multi-party Private Set Union from Multi-query Secret-Shared Private Membership Test.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#scalable-multi-party-private-set-union-from-multi-query-secret-shared-private-membership-test)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#scalable-multi-party-private-set-union-from-multi-query-secret-shared-private-membership-test)
### Authors
* Xiang Liu, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, Zhongguancun Laboratory, Beijing, China
### Abstract
> Multi-party private set union (MPSU) allows \(k(k\ge 3)\) parties, each holding a dataset of known size, to compute the union of their sets without revealing any additional information. Although two-party PSU has made rapid progress in recent years, applying its effective techniques to the multi-party setting would render information leakage and thus cannot be directly extended. Existing MPSU protocols heavily rely on computationally expensive public-key operations or generic secure multi-party computation techniques, which are not scalable.
> 
> In this work, we present a new efficient framework of MPSU from multi-party secret-shared shuffle and a newly introduced protocol called multi-query secret-shared private membership test (mq-ssPMT). Our MPSU is mainly based on symmetric-key operations and is secure against any semi-honest adversary that does not corrupt the leader and clients simultaneously. We also propose new frameworks for computing other multi-party private set operations (MPSO), such as the intersection, and the cardinality of the union and the intersection, meeting the same security requirements.
> 
> We demonstrate the scalability of our MPSU protocol with an implementation and a comparison with the state-of-the-art MPSU. Experiments show that when computing on datasets of \(2^{10}\) elements, our protocol is \(109\times \) faster than the state-of-the-art MPSU, and the improvement becomes more significant as the set size increases. To the best of our knowledge, ours is the first protocol that reports on large-size experiments. For 7 parties with datasets of \(2^{20}\) elements each, our protocol requires only 46 s.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_8](https://doi.org/10.1007/978-981-99-8721-4_8)
## Robust Publicly Verifiable Covert Security: Limited Information Leakage and Guaranteed Correctness with Low Overhead.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#robust-publicly-verifiable-covert-security-limited-information-leakage-and-guaranteed-correctness-with-low-overhead)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#robust-publicly-verifiable-covert-security-limited-information-leakage-and-guaranteed-correctness-with-low-overhead)
### Authors
* Yi Liu, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Junzuo Lai, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Anjia Yang, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Qi Wang, Department of Computer Science and Engineering & National Center for Applied Mathematics Shenzhen, Southern University of Science and Technology, Shenzhen, 518055, China
* Xianrui Qin, Department of Computer Science, The University of Hong Kong, Hong Kong, China
### Abstract
> Protocols with publicly verifiable covert (PVC) security offer high efficiency and an appealing feature: a covert party may deviate from the protocol, but with a probability (e.g., \(90\%\), referred to as the deterrence factor), the honest party can identify this deviation and expose it using a publicly verifiable certificate. These protocols are particularly suitable for practical applications involving reputation-conscious parties.
> 
> However, in the cases where misbehavior goes undetected (e.g., with a probability of \(10\%\)), no security guarantee is provided for the honest party, potentially resulting in a complete loss of input privacy and output correctness.
> 
> In this paper, we tackle this critical problem by presenting a highly effective solution. We introduce and formally define an enhanced notion called robust PVC security, such that even if the misbehavior remains undetected, the malicious party can only gain an additional 1-bit of information about the honest party’s input while maintaining the correctness of the output. We propose a novel approach leveraging dual execution and time-lock puzzles to design a robust PVC-secure two-party protocol with low overhead (depending on the deterrence factor). For instance, with a deterrence factor of \(90\%\), our robust PVC-secure protocol incurs only additional \({\sim }10\%\) overhead compared to the state-of-the-art PVC-secure protocol.
> 
> Given the stronger security guarantees with low overhead, our protocol is highly suitable for practical applications of secure two-party computation.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_9](https://doi.org/10.1007/978-981-99-8721-4_9)
## LERNA: Secure Single-Server Aggregation via Key-Homomorphic Masking.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#lerna-secure-single-server-aggregation-via-key-homomorphic-masking)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#lerna-secure-single-server-aggregation-via-key-homomorphic-masking)
### Authors
* Hanjun Li, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Stefano Tessaro, University of Washington, Seattle, WA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & AlgoCRYPT CoE, New York, NY, USA
### Abstract
> This paper introduces LERNA, a new framework for single-server secure aggregation. Our protocols are tailored to the setting where multiple consecutive aggregation phases are performed with the same set of clients, a fraction of which can drop out in some of the phases. We rely on an initial secret sharing setup among the clients which is generated once-and-for-all, and reused in all following aggregation phases. Compared to prior works [Bonawitz et al. CCS’17, Bell et al. CCS’20], the reusable setup eliminates one round of communication between the server and clients per aggregation—i.e., we need two rounds for semi-honest security (instead of three), and three rounds (instead of four) in the malicious model. Our approach also significantly reduces the server’s computational costs by only requiring the reconstruction of a single secret-shared value (per aggregation). Prior work required reconstructing a secret-shared value for each client involved in the computation.
> 
> We provide instantiations of LERNA based on both the Decisional Composite Residuosity (DCR) and (Ring) Learning with Rounding ((R)LWR) assumptions respectively and evaluate a version based on the latter assumption. In addition to savings in round-complexity (which result in reduced latency), our experiments show that the server computational costs are reduced by two orders of magnitude in comparison to the state-of-the-art. In settings with a large number of clients, we also reduce the computational costs up to twenty-fold for most clients, while a small set of “heavy clients” is subject to a workload that is still smaller than that of prior work.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_10](https://doi.org/10.1007/978-981-99-8721-4_10)
## Unconditionally Secure Multiparty Computation for Symmetric Functions with Low Bottleneck Complexity.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#unconditionally-secure-multiparty-computation-for-symmetric-functions-with-low-bottleneck-complexity)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#unconditionally-secure-multiparty-computation-for-symmetric-functions-with-low-bottleneck-complexity)
### Authors
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
### Abstract
> Bottleneck complexity is an efficiency measure of secure multiparty computation (MPC) introduced by Boyle et al. (ICALP 2018) to achieve load-balancing. Roughly speaking, it is defined as the maximum communication complexity required by any player within the protocol execution. Since it was shown to be impossible to achieve sublinear bottleneck complexity in the number of players n for all functions, a prior work constructed MPC protocols with low bottleneck complexity for specific functions. However, the previous protocol for symmetric functions needs to assume a computational primitive of garbled circuits and its unconditionally secure variant has exponentially large bottleneck complexity in the depth of an arithmetic formula computing the function, which limits the class of symmetric functions the protocol can compute with sublinear bottleneck complexity in n. In this work, we make the following contributions to unconditionally secure MPC protocols for symmetric functions with sublinear bottleneck complexity in n.
> 
> We propose for the first time unconditionally secure MPC protocols computing any symmetric function with sublinear bottleneck complexity in n. Technically, our first protocol is inspired by the one-time truth-table protocol by Ishai et al. (TCC 2013) but our second and third protocols use a novel technique to express the one-time truth-table as an array of two or higher dimensions and achieve better trade-offs.
> 
> We propose an unconditionally secure protocol tailored to the AND function with lower bottleneck complexity. It avoids pseudorandom functions used by the previous protocol for the AND function, preserving bottleneck complexity up to a logarithmic factor in n.
> 
> By combining our protocol for the AND function with Bloom filters, we construct an unconditionally secure protocol for private set intersection (PSI), which computes the intersection of players’ private sets. This is the first PSI protocol with sublinear bottleneck complexity in n and to the best of our knowledge, there has been no such protocol even under cryptographic assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_11](https://doi.org/10.1007/978-981-99-8721-4_11)
## Simple Threshold (Fully Homomorphic) Encryption from LWE with Polynomial Modulus.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#simple-threshold-fully-homomorphic-encryption-from-lwe-with-polynomial-modulus)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#simple-threshold-fully-homomorphic-encryption-from-lwe-with-polynomial-modulus)
### Authors
* Katharina Boudgoust, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> The learning with errors (LWE) assumption is a powerful tool for building encryption schemes with useful properties, such as plausible resistance to quantum computers, or support for homomorphic computations. Despite this, essentially the only method of achieving threshold decryption in schemes based on LWE requires a modulus that is superpolynomial in the security parameter, leading to a large overhead in ciphertext sizes and computation time.
> 
> In this work, we propose a (fully homomorphic) encryption scheme that supports a simple t-out-of-n threshold decryption protocol while allowing for a polynomial modulus. The main idea is to use the Rényi divergence (as opposed to the statistical distance as in previous works) as a measure of distribution closeness. This comes with some technical obstacles, due to the difficulty of using the Rényi divergence in decisional security notions such as standard semantic security. We overcome this by constructing a threshold scheme with a weaker notion of one-way security and then showing how to transform any one-way (fully homomorphic) threshold scheme into one guaranteeing indistinguishability-based security.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_12](https://doi.org/10.1007/978-981-99-8721-4_12)
## VSS from Distributed ZK Proofs and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#vss-from-distributed-zk-proofs-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#vss-from-distributed-zk-proofs-and-applications)
### Authors
* Shahla Atapoor, COSIC, KU Leuven, Leuven, Belgium
* Karim Baghery, COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, COSIC, KU Leuven, Leuven, Belgium
* Robi Pedersen, COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, IMDEA Software Institute, Madrid, Spain
### Abstract
> Non-Interactive Verifiable Secret Sharing (NI-VSS) is a technique for distributing a secret among a group of individuals in a verifiable manner, such that shareholders can verify the validity of their received share and only a specific number of them can access the secret. VSS is a fundamental tool in cryptography and distributed computing. In this paper, we present an extremely efficient NI-VSS scheme using Zero-Knowledge (ZK) proofs on secret shared data. While prior VSS schemes have implicitly used ZK proofs on secret shared data, we specifically use their formal definition recently provided by Boneh et al. in CRYPTO 2019. The proposed NI-VSS scheme uses a quantum random oracle and a quantum computationally hiding commitment scheme in a black-box manner, which ensures its ease of use, especially in post-quantum threshold protocols. Implementation results further solidify its practicality and superiority over current constructions. With the new VSS scheme, for parameter sets \((n, t)=(128, 63)\) and (2048, 1023), a dealer can share a secret in less than 0.02 and 2.0 s, respectively, and shareholders can verify their shares in less than 0.4 and 5.0 ms. Compared to the well-established Pedersen VSS scheme, for the same parameter sets, at the cost of \(2.5\times \) higher communication, the new scheme is respectively \(22.5\times \) and \(3.25\times \) faster in the sharing phase, and notably needs \(271\times \) and \(479\times \) less time in the verification. Leveraging the new NI-VSS scheme, we revisit several classic and PQ-secure threshold protocols and improve their efficiency. Our revisions led to more efficient versions of both the Pedersen DKG protocol and the GJKR threshold signature scheme. We show similar efficiency enhancements and improved resilience to malicious parties in isogeny-based DKG and threshold signature schemes. We think, due to its remarkable efficiency and ease of use, the new NI-VSS scheme can be a valuable tool for a wide range of threshold protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_13](https://doi.org/10.1007/978-981-99-8721-4_13)
## Threshold Linear Secret Sharing to the Rescue of MPC-in-the-Head.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-1].md#threshold-linear-secret-sharing-to-the-rescue-of-mpc-in-the-head)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-1].md#threshold-linear-secret-sharing-to-the-rescue-of-mpc-in-the-head)
### Authors
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
### Abstract
> The MPC-in-the-Head paradigm is a popular framework to build zero-knowledge proof systems using techniques from secure multi-party computation (MPC). While this paradigm is not restricted to a particular secret sharing scheme, all the efficient instantiations for small circuits proposed so far rely on additive secret sharing.
> 
> In this work, we show how applying a threshold linear secret sharing scheme (threshold LSSS) can be beneficial to the MPC-in-the-Head paradigm. For a general passively-secure MPC protocol model capturing most of the existing MPCitH schemes, we show that our approach improves the soundness of the underlying proof system from 1/N down to \(1/\left( {\begin{array}{c}N\\ \ell \end{array}}\right) \), where N is the number of parties and \(\ell \) is the privacy threshold of the sharing scheme. While very general, our technique is limited to a number of parties \(N \le |\mathbb {F}|\), where \(\mathbb {F}\) is the field underlying the statement, because of the MDS conjecture.
> 
> Applying our approach with a low-threshold LSSS also boosts the performance of the proof system by making the MPC emulation cost independent of N for both the prover and the verifier. The gain is particularly significant for the verification time which becomes logarithmic in N (while the prover still has to generate and commit the N input shares). We further generalize and improve our framework: we show how linearly-homomorphic commitments can get rid of the linear complexity of the prover, we generalize our result to any quasi-threshold LSSS, and we describe an efficient batching technique relying on Shamir’s secret sharing.
> 
> We finally apply our techniques to specific use-cases. We first propose a variant of the recent SDitH signature scheme achieving new interesting trade-offs. In particular, for a signature size of 10 KB, we obtain a verification time lower than 0.5 ms, which is competitive with SPHINCS+, while achieving much faster signing. We further apply our batching technique to two different contexts: batched SDitH proofs and batched proofs for general arithmetic circuits based on the Limbo proof system. In both cases, we obtain an amortized proof size lower than 1/10 of the baseline scheme when batching a few dozen statements, while the amortized performances are also significantly improved.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8721-4_14](https://doi.org/10.1007/978-981-99-8721-4_14)
