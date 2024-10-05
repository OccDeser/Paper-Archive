# Crypto[2024-8]
## Reusable Online-Efficient Commitments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#reusable-online-efficient-commitments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#reusable-online-efficient-commitments)
### Authors
* Nir Bitansky, New York University, New York, USA
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Dana Shamir, Tel Aviv University, Tel Aviv, Israel
### Abstract
> An online-efficient commitment is a succinct locally-openable commitment, where the bulk of the sender work is done offline, generating an encoding \(\tilde{x}\) of the committed data x. In the online phase, both the sender, given random access to \(\tilde{x}\), and receiver run in polylogarithmic time in the length of x. Online-efficient commitments were recently constructed under the standard assumption of RingLWE by Lin, Mook, and Wichs, but with a significant caveat: they are not reusable. Their commitments are privately verifiable and cease to be binding if a malicious sender can learn whether the receiver accepts or rejects in repeated decommitment requests.
> 
> We construct the first reusable online-efficient commitment under a standard assumption, Ring LWE. A main component in our analysis is a leakage lemma by Chung, Kalai, Liu, and Raz (CRYPTO ‘11) introduced in the context of streaming delegation schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_1](https://doi.org/10.1007/978-3-031-68397-8_1)
## Secure Multiparty Computation with Identifiable Abort via Vindicating Release.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#secure-multiparty-computation-with-identifiable-abort-via-vindicating-release)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#secure-multiparty-computation-with-identifiable-abort-via-vindicating-release)
### Authors
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Jack Doerner, Brown University, Providence, USA
* Jack Doerner, Technion, Haifa, Israel
* Yashvanth Kondi, Silence Laboratories (Deel), Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
### Abstract
> In the dishonest-majority setting, secure multiparty computation (MPC) with identifiable abort (IA) guarantees that honest parties can identify and agree upon at least one cheating party if the protocol does not produce an output. Known MPC constructions with IA rely on generic zero-knowledge proofs, adaptively secure oblivious transfer (OT) protocols, or homomorphic primitives, and thus incur a substantial penalty with respect to protocols that abort without identifiability.
> 
> We introduce a new, weaker notion of IA called input-revealing IA (IRIA), which can be constructed through selective revealing of committed input values—a technique we call vindicating release. We show that this weaker form of IA can be achieved with small concrete overheads for many interesting protocols in the literature, including the pre-processing protocols needed for several state-of-the-art MPC protocols.
> 
> We next show how to assemble these IRIA components into an MPC protocol for any functionality with standard IA. Such a realization differs minimally in terms of cost, techniques, and analysis from the equivalent realization that lacks identifiability, e.g., our total bandwidth overhead incurred is less than 2x, which is an asymptotic improvement over prior work on IA.
> 
> On a practical level, we apply our techniques to the problem of threshold ECDSA, and show that the resulting protocol with standard IA is concretely efficient. On a theoretical level, we present a compiler that transforms any secure protocol into one with standard IA assuming only a variant of statically-corruptable ideal OT.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_2](https://doi.org/10.1007/978-3-031-68397-8_2)
## MPC for Tech Giants (GMPC): Enabling Gulliver and the Lilliputians to Cooperate Amicably.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#mpc-for-tech-giants-gmpc-enabling-gulliver-and-the-lilliputians-to-cooperate-amicably)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#mpc-for-tech-giants-gmpc-enabling-gulliver-and-the-lilliputians-to-cooperate-amicably)
### Authors
* Bar Alon, Department of Computer Science, Ben-Gurion University, Beer Sheva, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Eran Omri, School of Computer Science, Ariel University, Ariel Cyber Innovation Center (ACIC), Ariel, Israel
* Uri Stemmer, School of Computer Science, Tel Aviv University, Tel-Aviv, Israel
### Abstract
> In the current digital world, large organizations (sometimes referred to as tech giants) provide service to extremely large numbers of users. The service provider is often interested in computing various data analyses over the private data of its users, which in turn have their incentives to cooperate, but do not necessarily trust the service provider.
> 
> In this work, we introduce the Gulliver multi-party computation model (GMPC) to realistically capture the above scenario. The GMPC model considers a single highly powerful party, called the server or Gulliver, that is connected to n users over a star topology network (alternatively formulated as a full network, where the server can block any message). The users are significantly less powerful than the server, and, in particular, should have both computation and communication complexities that are polylogarithmic in n. Protocols in the GMPC model should be secure against malicious adversaries that may corrupt a subset of the users and/or the server.
> 
> Designing protocols in the GMPC model is a delicate task, since users can only hold information about \(\textrm{polylog}(n)\) other users (and, in particular, can only communicate with \(\textrm{polylog}(n)\) other users). In addition, the server can block any message between any pair of honest parties. Thus, reaching an agreement becomes a challenging task. Nevertheless, we design generic protocols in the GMPC model, assuming that at most \(\alpha <{1/8}\) fraction of the users may be corrupted (in addition to the server). Our main contribution is a variant of Feige’s committee election protocol [FOCS 1999] that is secure in the GMPC model. Given this tool we show:
> 
> 1. Assuming fully homomorphic encryption (FHE), any computationally efficient function with \(O\left( n\cdot \textrm{polylog}(n)\right) \)-size output can be securely computed in the GMPC model.
> 
> 2. Any function that can be computed by a circuit of \(O(\textrm{polylog}(n))\) depth, \(O\left( n\cdot \textrm{polylog}(n)\right) \) size, and bounded fan-in and fan-out can be securely computed in the GMPC model assuming vector commitment schemes (without assuming FHE).
> 
> 3. In particular, sorting can be securely computed in the GMPC model assuming vector commitment schemes. This has important applications for the shuffle model of differential privacy, and resolves an open question of Bell et al. [CCS 2020].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_3](https://doi.org/10.1007/978-3-031-68397-8_3)
## Robust Additive Randomized Encodings from IO and Pseudo-Non-linear Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#robust-additive-randomized-encodings-from-io-and-pseudo-non-linear-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#robust-additive-randomized-encodings-from-io-and-pseudo-non-linear-codes)
### Authors
* Nir Bitansky, New York University, New York, USA
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Additive randomized encodings (ARE), introduced by Halevi, Ishai, Kushilevitz, and Rabin (CRYPTO 2023), reduce the computation of a k-party function \(f(x_1,\dots ,x_k)\) to locally computing encodings \(\hat{x}_i\) of each input \(x_i\) and then adding them together over some Abelian group into an output encoding \(\hat{y} = \sum \hat{x}_i\), which reveals nothing but the result. In robust ARE (RARE) the sum of any subset of \(\hat{x}_i\), reveals only the residual function obtained by restricting the corresponding inputs. The appeal of (R)ARE comes from the simplicity of the interactive part of the computation, involving only addition, which yields for instance non-interactive multi-party computation in the shuffle model where messages from different parties are anonymously shuffled. Halevi, Ishai, Kushilevitz, and Rabin constructed ARE from standard assumptions and RARE in the ideal obfuscation model, leaving open the question of whether RARE can be constructed in the plain model.
> 
> We construct RARE in the plain model from indistinguishability obfuscation, which is necessary, and a new primitive that we call pseudo-non-linear codes. We provide two constructions of this primitive assuming either Learning with Errors or Decision Diffie Hellman. A bonus feature of our construction is that it is succinct. Specifically, encodings \(\hat{x}_i\) can be decomposed to non-interactive parts \(\hat{z}_i\), generated in time proportional to the input size, and sent directly to the evaluator, and group parts \(\hat{g}_i\) that are added together, and whose size depends only on the security parameter.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_4](https://doi.org/10.1007/978-3-031-68397-8_4)
## Fully Secure MPC and zk-FLIOP over Rings: New Constructions, Improvements and Extensions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#fully-secure-mpc-and-zk-fliop-over-rings-new-constructions-improvements-and-extensions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#fully-secure-mpc-and-zk-fliop-over-rings-new-constructions-improvements-and-extensions)
### Authors
* Anders Dalskov, Partisia, Aarhus, Denmark
* Daniel Escudero, JP Morgan AI Research and JP Morgan AlgoCRYPT CoE, New York, USA
* Ariel Nof, Bar-Ilan University, Ramat Gan, Israel
### Abstract
> We revisit the question of the overhead to achieve full security (i.e., guaranteed output delivery) in secure multiparty computation (MPC). Recent works have closed the gap between full security and semi-honest security, by introducing protocols where the parties first compute the circuit using a semi-honest protocol and then run a verification step with sublinear communication in the circuit size. However, in these works the number of interaction rounds in the verification step is also sublinear in the circuit’s size. Unlike communication, the round complexity of the semi-honest execution typically grows with the circuit’s depth and not its size. Hence, for large but shallow circuits, this additional number of rounds incurs a significant overhead. Motivated by this gap, we make the following contributions:
> 
> 1. We present a new MPC framework to obtain full security, compatible with effectively any ring, that has an additive communication overhead of only \(O(\log |C|)\), where |C| is the number of multiplication gates in the circuit, and a constant number of additional rounds beyond the underlying semi-honest protocol. Our framework works with any linear secret sharing scheme and relies on a new to utilize the machinery of zero-knowledge fully linear interactive oracle proofs (zk-FLIOP) in a black-box way. We present several instantiations to the building blocks of our compiler, from which we derive concretely efficient protocols in different settings.
> 
> 2. We present extensions to the zk-FLIOP primitive for very general settings. The first one is for proving statements over potentially non-commutative rings, where the only requirement is that the ring has a large enough set where (1) every element in the set commutes with every element in the ring, and (2) the difference between any two distinct elements is invertible. Our second zk-FLIOP extension is for proving statements over Galois Rings. For these rings, we present concrete improvements on the current state-of-the-art for the case of constant-round proofs, by making use of Reverse Multiplication Friendly Embeddings (RMFEs).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_5](https://doi.org/10.1007/978-3-031-68397-8_5)
## Towards Achieving Asynchronous MPC with Linear Communication and Optimal Resilience.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#towards-achieving-asynchronous-mpc-with-linear-communication-and-optimal-resilience)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#towards-achieving-asynchronous-mpc-with-linear-communication-and-optimal-resilience)
### Authors
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Chen-Da Liu-Zhang, Lucerne University of Applied Sciences and Arts and Web3 Foundation, Luzern, Switzerland
* Yifan Song, Tsinghua University, Beijing, China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> Secure multi-party computation (MPC) allows a set of n parties to jointly compute a function over their private inputs. The seminal works of Ben-Or, Canetti and Goldreich [STOC ’93] and Ben-Or, Kelmer and Rabin [PODC ’94] settled the feasibility of MPC over asynchronous networks. Despite the significant line of work devoted to improving the communication complexity, current protocols with information-theoretic security and optimal resilience \(t<n/3\) communicate \(\varOmega (n^4C)\) field elements for a circuit with C multiplication gates. In contrast, synchronous MPC protocols with \(\varOmega (nC)\) communication have long been known.
> 
> In this work we make progress towards closing this gap. We provide a novel MPC protocol in the asynchronous setting with statistical security that makes black-box use of an asynchronous complete secret-sharing (ACSS) protocol. The cost per multiplication reduces to the cost of distributing a constant number of sharings via ACSS, improving a linear factor over the state of the art by Choudhury and Patra [IEEE Trans. Inf. Theory ’17].
> 
> With a recent concurrent work achieving ACSS with linear cost per sharing, we achieve an MPC with O(nC) communication.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_6](https://doi.org/10.1007/978-3-031-68397-8_6)
## Game-Theoretically Fair Distributed Sampling.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#game-theoretically-fair-distributed-sampling)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#game-theoretically-fair-distributed-sampling)
### Authors
* Sri AravindaKrishnan Thyagarajan, School of Computer Science, University of Sydney, Camperdown, Australia
* Pratik Soni, Kahlert School of Computing, University of Utah, Salt Lake City, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> Cleve’s celebrated result (STOC’86) showed that a strongly fair multi-party coin-toss is impossible against majority-sized coalitions. Recently, however, a fascinating line of work studied a relaxed fairness notion called game-theoretic fairness, which guarantees that no coalition should be incentivized to deviate from the prescribed protocol. A sequence of works has explored the feasibility of game-theoretic fairness for two-sided coin-toss, and demonstrated feasibility in the dishonest majority setting under standard cryptographic assumptions. However, this line of work only focused on uniform two-sided coin-toss or leader election.
> 
> In this work, we initiate the comprehensive study of game-theoretic fairness for multi-party sampling from general distributions. In particular, for the case of m-sided uniform coin-toss we give a nearly complete characterization of the regime in which game-theoretic fairness is feasible. Interestingly, contrary to standard fairness notions in cryptography, the composition of game-theoretically fair two-sided coin-toss protocols does not necessarily yield game-theoretically fair multi-sided coins. To circumvent this, we introduce new techniques compatible with game-theoretic fairness. In particular, we give the following results:
> 
> We give a protocol from standard cryptographic assumptions that achieves game-theoretic fairness for uniform m-sided coin-toss against half- or more-sized adversarial coalitions.
> 
> To complement our protocol, we give a general impossibility result that establishes the optimality of our protocol for a broad range of parameters modulo an additive constant. Even in the worst-case, the gap between our protocol and our impossibility result is only a small constant multiplicative factor.
> 
> We also present a game-theoretically fair protocol for any efficiently sampleable m-outcome distribution in the dishonest majority setting. For instance, even for the case of \(m=2\) (i.e., two-sided coin-toss), our result implies a game-theoretically fair protocol for an arbitrary Bernoulli coin. In contrast, the work of Wu, Asharov, and Shi only focussed on a Bernoulli coin with parameter 1/2.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_7](https://doi.org/10.1007/978-3-031-68397-8_7)
## Doubly Efficient Cryptography: Commitments, Arguments and RAM MPC.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#doubly-efficient-cryptography-commitments-arguments-and-ram-mpc)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#doubly-efficient-cryptography-commitments-arguments-and-ram-mpc)
### Authors
* Wei-Kai Lin, University of Virginia, Charlottesville, USA
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> Can a sender commit to a long input without even reading all of it? Can a prover convince a verifier that an NP statement holds without even reading the entire witness? Can a set of parties run a multiparty computation (MPC) protocol in the RAM model, without necessarily even reading their entire inputs? We show how to construct such “doubly efficient” schemes in a setting where parties can preprocess their input offline, but subsequently they can engage in many different protocol executions over this input in sublinear online time. We do so in the plain model, without any common setup. Our constructions rely on doubly efficient private information retrieval (DEPIR) as a building block and can be instantiated based on Ring LWE.
> 
> In more detail, we begin by constructing doubly efficient (interactive) commitments, where the sender preprocesses the input offline, and can later commit to this input to arbitrary receivers in sublinear online time. Moreover, the sender can open individual bits of the committed input in sublinear time. We then use these commitments to implement doubly succinct (interactive) arguments, where the prover preprocesses the statement/witness offline, and can subsequently run many proof protocoils to convince arbitrary verifiers of the statement’s validity in sublinear online time. Furthermore, we augment these to get a doubly efficient “commit, prove and locally open” protocol, where the prover can commit to a long preprocessed input, prove that it satisfies some global property, and locally open individual bits, all in sublinear time. Finally, we leverage these tools to construct a RAM-MPC with malicious security in the plain model. Each party individually preprocesses its input offline, and can then run arbitrary MPC executions over this input with arbitrary other parties. The online run-time of each MPC execution is only proportional to the RAM run-time of the underlying program, that can be sublinear in the input size.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_8](https://doi.org/10.1007/978-3-031-68397-8_8)
## Improved Alternating-Moduli PRFs and Post-quantum Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#improved-alternating-moduli-prfs-and-post-quantum-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#improved-alternating-moduli-prfs-and-post-quantum-signatures)
### Authors
* Navid Alamati, VISA Research, Foster City, USA
* Peter Rindal, VISA Research, Foster City, USA
* Guru-Vamsi Policharla, UC Berkeley, Berkeley, USA
* Srinivasan Raghuraman, VISA Research and MIT, Cambridge, UK
### Abstract
> We revisit the alternating moduli paradigm for constructing symmetric key primitives with a focus on constructing highly efficient protocols to evaluate them using secure multi-party computation (MPC). The alternating moduli paradigm of Boneh et al. (TCC 2018) enables the construction of various symmetric key primitives with the common characteristic that the inputs are multiplied by two linear maps over different moduli, first over \(\mathbb {F}_2\) and then over \(\mathbb {F}_3\).
> 
> The first contribution focuses on efficient two-party evaluation of alternating moduli PRFs, effectively building an oblivious pseudo random function. We present a generalization of the PRF proposed by Boneh et al. (TCC 18) along with methods to lower the communication and computation. We then provide several variants of our protocols, with different computation and communication tradeoffs, for evaluating the PRF. Most are in the OT/VOLE hybrid model while one is based on specialized garbling. Our most efficient protocol effectively is about \(3\times \) faster and requires \(1.3\times \) less communication.
> 
> Our next contribution is the efficient evaluation of the OWF \(f(x)=\textbf{B}\cdot _3 (\textbf{A}\cdot _2 x)\) proposed by Dinur et al. (CRYPTO 21) where \(\textbf{A}\in \mathbb {F}^{m\times n}_2, \textbf{B}\in \mathbb {F}^{t\times m}_3\) and \(\cdot _p\) is multiplication mod p. This surprisingly simple OWF can be evaluated within MPC by secret sharing \({\llbracket x \rrbracket }\) over \(\mathbb {F}_2\), locally computing \({\llbracket v \rrbracket }=\textbf{A}\cdot _2 {\llbracket x \rrbracket }\), performing a modulus switching protocol to \(\mathbb {F}_3\) shares, followed by locally computing the output shares \({\llbracket y \rrbracket }=B\cdot _3 {\llbracket v \rrbracket }\). We design a bespoke MPC-in-the-Head (MPCitH) signature scheme that evaluates the OWF, achieving state of art performance. The resulting signature has a size ranging from 4.0–5.5 KB, achieving between \(2\text {-}3\times \) reduction compared to Dinur et al. To the best of our knowledge, this is only \(\approx 5\%\) larger than the smallest signature based on symmetric key primitives, including the latest NIST PQC competition submissions. We additionally show that our core techniques can be extended to build very small post-quantum ring signatures for small-medium sized rings that are competitive with state-of-the-art lattice based schemes. Our techniques are in fact more generally applicable to set membership in MPCitH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_9](https://doi.org/10.1007/978-3-031-68397-8_9)
## Computation Efficient Structure-Aware PSI from Incremental Function Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#computation-efficient-structure-aware-psi-from-incremental-function-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#computation-efficient-structure-aware-psi-from-incremental-function-secret-sharing)
### Authors
* Gayathri Garimella, Brown University, Providence, USA
* Benjamin Goff, Brown University, Providence, USA
* Peihan Miao, Brown University, Providence, USA
### Abstract
> Structure-Aware Private Set Intersection (sa-PSI), recently introduced by Garimella et al. (Crypto’22), is a PSI variant where Alice’s input set \(S_A\) has a publicly known structure (for example, interval, ball or union of balls) and Bob’s input \(S_B\) is an unstructured set of elements. Prior work achieves sa-PSI where the communication cost only scales with the description size of \(S_A\) instead of the set cardinality. However, the computation cost remains linear in the cardinality of \(S_A\), which could be prohibitively large.
> 
> In this work, we present a new semi-honest sa-PSI framework where both computation and communication costs only scale with the description size of \(S_A\). Our main building block is a new primitive that we introduce called Incremental Boolean Function Secret Sharing (ibFSS), which is a generalization of FSS that additionally allows for evaluation on input prefixes. We formalize definitions and construct a weak ibFSS for a d-dimensional ball with \(\ell _\infty \) norm, which may be of independent interest. Independently, we improve spatial hashing techniques (from prior work) when \(S_A\) has structure union of d-dimensional balls in \((\{0,1\} ^u)^d\), each of diameter \(\delta \), from \(\mathcal {O} (u \cdot d \cdot (\log \delta )^d)\) to \(\mathcal {O} (\log \delta \cdot d)\) in terms of both computation and communication. Finally, we resolve the following open questions from prior work with communication and computation scaling with the description size of the structured set.
> 
> Our PSI framework can handle a union of overlapping structures, while prior work strictly requires a disjoint union.
> 
> We have a new construction that enables Bob with unstructured input \(S_B\) to learn the intersection.
> 
> We extend to a richer class of functionalities like structure-aware PSI Cardinality and PSI-Sum of associated values.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_10](https://doi.org/10.1007/978-3-031-68397-8_10)
## Compressing Unit-Vector Correlations via Sparse Pseudorandom Generators.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#compressing-unit-vector-correlations-via-sparse-pseudorandom-generators)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#compressing-unit-vector-correlations-via-sparse-pseudorandom-generators)
### Authors
* Amit Agarwal, UIUC, Champaign, USA
* Elette Boyle, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Yiping Ma, University of Pennsylvania, Philadelphia, USA
### Abstract
> A unit-vector (UV) correlation is an additive secret-sharing of a vector of length B that contains 1 in a secret random position and 0’s elsewhere. UV correlations are a useful resource for many cryptographic applications, including low-communication secure multiparty computation and multi-server private information retrieval. However, current practical methods for securely generating UV correlations involve a significant communication cost per instance, and become even more expensive when requiring security against malicious parties.
> 
> In this work, we present a new approach for constructing a pseudorandom correlation generator (PCG) for securely generating n independent instances of UV correlations of any polynomial length B. Such a PCG compresses the n UV instances into correlated seeds whose length is sublinear in the description size \(n\cdot \log B\). Our new PCGs apply in both the honest-majority and dishonest-majority settings, and are based on a variety of assumptions. In particular, in the honest-majority case they only require “unstructured” assumptions. Our PCGs give rise to secure end-to-end protocols for generating n instances of UV correlations with o(n) bits of communication. This applies even to an authenticated variant of UV correlations, which is useful for security against malicious parties. Unlike previous theoretical solutions, some instances of our PCGs offer good concrete efficiency.
> 
> Our technical approach is based on combining a low-degree sparse pseudorandom generator, mapping a sparse seed to a pseudorandom sparse output, with homomorphic secret sharing for low-degree polynomials. We then reduce such sparse PRGs to local PRGs over large alphabets, and explore old and new approaches for maximizing the stretch of such PRGs while minimizing their locality.
> 
> Finally, towards further compressing the PCG seeds, we present a new PRG-based construction of a multiparty distributed point function (DPF), whose outputs are degree-1 Shamir-shares of a secret point function. This result is independently motivated by other DPF applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_11](https://doi.org/10.1007/978-3-031-68397-8_11)
## Scalable Multiparty Computation from Non-linear Secret Sharing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#scalable-multiparty-computation-from-non-linear-secret-sharing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#scalable-multiparty-computation-from-non-linear-secret-sharing)
### Authors
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Abhishek Jain, John Hopkins University, Baltimore, USA
* Abhishek Jain, NTT Research, Sunnyvale, USA
* Pratyay Mukherjee, Supra Research, Kelowna, Canada
### Abstract
> A long line of work has investigated the design of scalable secure multiparty computation (MPC) protocols with computational and communication complexity independent of the number of parties (beyond any dependence on the circuit size). We present the first unconditionally-secure MPC protocols for arithmetic circuits over large fields with total computation \(\ensuremath {\mathcal {O}\left( {|C|\log |F|}\right) }\), where |C| and |F| denote the circuit and field size, respectively.
> 
> Prior work could either achieve similar complexity only in communication, or required highly structured circuits, or expensive circuit transformations. To obtain our results, we depart from the prior approach of share packing in linear secret-sharing schemes; instead, we use an “unpacking” approach via non-linear secret sharing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_12](https://doi.org/10.1007/978-3-031-68397-8_12)
## Linear-Communication Asynchronous Complete Secret Sharing with Optimal Resilience.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#linear-communication-asynchronous-complete-secret-sharing-with-optimal-resilience)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#linear-communication-asynchronous-complete-secret-sharing-with-optimal-resilience)
### Authors
* Xiaoyu Ji, Tsinghua University, Beijing, China
* Yifan Song, Tsinghua University, Beijing, China
* Junru Li, ShanghaiTech University, Shanghai, China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> Secure multiparty computation (MPC) allows a set of n parties to jointly compute a function on their private inputs. In this work, we focus on the information-theoretic MPC in the asynchronous network setting with optimal resilience (\(t<n/3\)). The best-known result in this setting is achieved by Choudhury and Patra [J. Cryptol ’23], which requires \(O(n^4\kappa )\) bits per multiplication gate, where \(\kappa \) is the size of a field element.
> 
> An asynchronous complete secret sharing (ACSS) protocol allows a dealer to share a batch of Shamir sharings such that all parties eventually receive their shares. ACSS is an important building block in AMPC. The best-known result of ACSS is due to Choudhury and Patra [J. Cryptol ’23], which requires \(O(n^3\kappa )\) bits per sharing. On the other hand, in the synchronous setting, it is known that distributing Shamir sharings can be achieved with \(O(n\kappa )\) bits per sharing. There is a gap of \(n^2\) in the communication between the synchronous setting and the asynchronous setting.
> 
> Our work closes this gap by presenting the first ACSS protocol that achieves \(O(n\kappa )\) bits per sharing. When combined with the compiler from ACSS to AMPC by Choudhury and Patra [IEEE Trans. Inf. Theory ’17], we obtain an AMPC with \(O(n^2\kappa )\) bits per multiplication gate, improving the previously best-known result by a factor of \(n^2\). Moreover, with a concurrent work that improves the compiler by Choudhury and Patra by a factor of n, we obtain the first AMPC with \(O(n\kappa )\) bits per multiplication gate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_13](https://doi.org/10.1007/978-3-031-68397-8_13)
## Cheater Identification on a Budget: MPC with Identifiable Abort from Pairwise MACs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-8].md#cheater-identification-on-a-budget-mpc-with-identifiable-abort-from-pairwise-macs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#cheater-identification-on-a-budget-mpc-with-identifiable-abort-from-pairwise-macs)
### Authors
* Carsten Baum, Technical University of Denmark, Lyngby, Denmark
* Nikolas Melissaris, Aarhus University,  Aarhus, Denmark
* Peter Scholl, Aarhus University,  Aarhus, Denmark
* Rahul Rachuri, Visa Research, Foster City, USA
### Abstract
> Cheater identification in secure multi-party computation (MPC) allows the honest parties to agree upon the identity of a cheating party, in case the protocol aborts. In the context of a dishonest majority, this becomes especially critical, as it serves to thwart denial-of-service attacks and mitigate known impossibility results on ensuring fairness and guaranteed output delivery.
> 
> In this work, we present a new, lightweight approach to achieving identifiable abort in dishonest majority MPC. We avoid all of the heavy machinery used in previous works, instead relying on a careful combination of lightweight detection mechanisms and techniques from state-of-the-art protocols secure with (non-identifiable) abort.
> 
> At the core of our construction is a homomorphic, multi-receiver commitment scheme secure with identifiable abort. This commitment scheme can be constructed from cheap vector oblivious linear evaluation protocols based on learning parity with noise. To support cheater identification, we design a general compilation technique, similar to a compiler of Ishai et al. (Crypto 2014), but avoid its requirement for adaptive security of the underlying protocol. Instead, we rely on a different (and seemingly easier to achieve) property we call online extractability, which may be of independent interest. Our MPC protocol can be viewed as a version of the BDOZ MPC scheme (Bendlin et al., Eurocrypt 2011) based on pairwise information-theoretic MACs, enhanced to support cheater identification and a highly efficient preprocessing phase, essentially as efficient as the non-identifiable protocol of Le Mans (Rachuri & Scholl, Crypto 2022).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_14](https://doi.org/10.1007/978-3-031-68397-8_14)
